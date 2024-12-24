import pika, sys, os, json
from jsonschema import validate, ValidationError

schema = schema = {
    "type": "object",
    "properties": {
        "task_id": {"type": "string"},
        "task_type": {"type": "string"},
        "payload": {"type": "object"}
    },
    "required": ["task_id", "task_type", "payload"]
}


def main():
    # define a function that will get called when a message is consumed
    def call_back(ch, method, properties, body):
        print("Received message:", body)
        try:
            json_body = json.loads(body)
            validate(instance=json_body, schema=schema)
            print("Message is valid")
        except json.JSONDecodeError as e:
            print("Failed to decode JSON:", e)
        except ValidationError as e:
            print("Invalid message:", e)

    # define the connection to the broker
    connection = pika.BlockingConnection(pika.ConnectionParameters(
        host='localhost',
    ))
    channel = connection.channel()

    # now define a consumer
    channel.basic_consume(
        queue='test',
        auto_ack=True,
        on_message_callback=call_back
    )


    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
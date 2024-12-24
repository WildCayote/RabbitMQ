import pika, json

connection = pika.BlockingConnection(pika.ConnectionParameters(
    host='localhost',
))
channel = connection.channel()

message = {
    "task_id": "12345",
    "task_type": "data_processing",
    "payload": {"file_url": "https://example.com"}
}

message = json.dumps(message)
print(message)

# declaring a queue before sending a message, if the queue doesn't exist 
# rabbitmq simply drops the message
channel.queue_declare(queue='test', durable=True)

# now we can publish a message on that queue
channel.basic_publish(
    exchange='',
    routing_key='test',
    body=message
)

print("[x] sent 'Hello World'")

connection.close()
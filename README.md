### Here is how you can test this experiment

1. Clone this repository

   ```bash
   git clone https://github.com/WildCayote/RabbitMQ.git
   ```

2. Get the rabbitmq:management image from docker hub

   ```bash
   docker pull rabbitmq:management
   ```

3. Run an instance of the pulled image

   ```bash
   docker run -d -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
   ```

   You can find the management at [here](http://localhost:15672/)

   username: guest
   password: guest

4. Install python requierments for the 'producer.py' and 'consumer.py' to run without errors

   ```bash
   pip install -r requierments.txt
   ```

   Now the python scripts can be executed easily as follows:

   ```bash
   python consumer.py
   ```

   ```bash
   python producer.py
   ```

5. For the nest js application you can follow the README in the test-app directory

The single NestJS app can subscribe to multiple topics, produce to multiple topics and all the while accept http requests. Which wasn't possible by just using the steps provided in the NestJS documentation.

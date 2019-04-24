# delay-messenger

Nodejs delay messenger use Redis as a storage/message-broker.

## Application requirements - [here](https://github.com/vklymniuk/delay-messenger/blob/master/REQUIREMENTS.md).


Run local environment via docker

```bash
bash docker/run-compose.sh
```

Environment variables
```text
PORT= input port
WORKER_INTERVAL= Workers interval to poll for new message from redis  
REDIS_URI= 'redis://redis:6379'
```

Message processing states order. (success workflow)
```text
- message.new
- message.scheduled
- message.pending
- message.processing
- message.processed
- message.removing
- message.removed
```

Message processing states order. (terminated workflow)
```text
- message.new
- message.scheduled
- message.pending
- message.processing
- message.pending...retry
- message.processing
- message.processed
- message.removing
- message.removed
```



# delay-messenger

Nodejs delay messenger use Redis as a storage/message-broker.


Run local environment via docker

```bash
bash docker/run-compose.sh
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



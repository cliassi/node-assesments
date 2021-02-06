# Team Members

1. Nesar(4)
2. Fahim(3)
3. Shahed(3)

# Problem Statment

- Customer should be notified of any event/state change in order, transaction and fulfillment
- 

```
architecture
- hld
  - flow-chart.jpg
  - block-diagram.jpg
- lld
  - erd.jpg
  - ...
- api-spec
  - swagger.json
  - events.md
- stack.md
- solution-brief.md
```
- Prepare a solution brief in markdown, where you refer these files in proper sections; this solution brief is something you will present to explain your solution/architecture to others

# Fixed Stack Assumptions

- PubSub: `redis`
- Databases: `mysql` or `mongodb`
- Framework: `express`
- Deployment: `docker` with `docker-compose`
- Usage of `typescript` is optional; no need at this moment
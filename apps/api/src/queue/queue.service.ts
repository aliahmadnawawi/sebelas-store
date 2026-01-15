import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  private queue: Queue;

  constructor() {
    const host = process.env.REDIS_HOST || 'localhost';
    const port = Number(process.env.REDIS_PORT || 6379);
    this.queue = new Queue('sebelas-jobs', {
      connection: { host, port }
    });
  }

  async enqueue(name: string, data: Record<string, unknown>) {
    return this.queue.add(name, data, { removeOnComplete: true, removeOnFail: 500 });
  }
}

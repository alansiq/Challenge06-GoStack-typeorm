import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError("Couldn't find Transaction with that ID.", 404);
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;

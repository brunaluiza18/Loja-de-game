import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      relations: { produto: true }
    });
  }

  findById(id: number): Promise<Categoria | null> {
    return this.categoriaRepository.findOne({
      where: { id },
      relations: { produto: true }
    });
  }

  findByTipo(tipo: string): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      where: { tipo: tipo },
      relations: { produto: true }
    });
  }

  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  update(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
}

}

import { Controller, Get, Param, Body, Post, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/categoria.entity';

@Controller('/categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<Categoria | null> {
        return this.categoriaService.findById(id);
    }

    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK)
    findByTipo(@Param('tipo') tipo: string): Promise<Categoria[]> {
        return this.categoriaService.findByTipo(tipo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): Promise<void> {
        return this.categoriaService.delete(id);
    }
}

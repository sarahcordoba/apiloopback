import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Aeropuerto} from './aeropuerto.model';

@model()
export class Ruta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'number',
    required: true,
  })
  tiempo_estimado: number;

  @belongsTo(() => Aeropuerto, {name: 'origen_aeropuerto'})
  origen: string;

  @belongsTo(() => Aeropuerto, {name: 'destino_aeropuerto'})
  destino: string;

  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;

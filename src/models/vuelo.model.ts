import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'Date',
    required: true,
  })
  fecha_inicio: Date;

  @property({
    type: 'string',
    required: true,
  })
  hora_inicio: string;

  @property({
    type: 'Date',
    required: true,
  })
  fecha_fin: Date;

  @property({
    type: 'string',
    required: true,
  })
  hora_fin: string;

  @property({
    type: 'number',
    required: true,
  })
  asientos_vendidos: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre_piloto: string;

  @belongsTo(() => Ruta, {name: 'rutaFk'})
  ruta: string;

  constructor(data?: Partial<Vuelo>) {
    super(data);
  }

}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;

import {authenticate} from '@loopback/authentication';
import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Aeropuerto, Ruta
} from '../models';
import {RutaRepository} from '../repositories';

@authenticate("admin")
export class RutaAeropuertoController {
  constructor(
    @repository(RutaRepository)
    public rutaRepository: RutaRepository,
  ) { }

  @get('/rutas/{id}/aeropuerto', {
    responses: {
      '200': {
        description: 'Aeropuerto belonging to Ruta',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aeropuerto)},
          },
        },
      },
    },
  })
  async getAeropuerto(
    @param.path.string('id') id: typeof Ruta.prototype.id,
  ): Promise<Aeropuerto> {
    return this.rutaRepository.destino_aeropuerto(id);
  }
}

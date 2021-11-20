import {authenticate} from '@loopback/authentication';
import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef, param
} from '@loopback/rest';
import {
  Ruta, Vuelo
} from '../models';
import {VueloRepository} from '../repositories';


@authenticate("admin")
export class VueloRutaController {
  constructor(
    @repository(VueloRepository)
    public vueloRepository: VueloRepository,
  ) { }

  @get('/vuelos/{id}/ruta', {
    responses: {
      '200': {
        description: 'Ruta belonging to Vuelo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ruta)},
          },
        },
      },
    },
  })
  async getRuta(
    @param.path.string('id') id: typeof Vuelo.prototype.id,
  ): Promise<Ruta> {
    return this.vueloRepository.rutaFk(id);
  }
}

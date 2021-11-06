import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Ruta, RutaRelations, Aeropuerto} from '../models';
import {AeropuertoRepository} from './aeropuerto.repository';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.id,
  RutaRelations
> {

  public readonly origen_aeropuerto: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.id>;

  public readonly destino_aeropuerto: BelongsToAccessor<Aeropuerto, typeof Ruta.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('AeropuertoRepository') protected aeropuertoRepositoryGetter: Getter<AeropuertoRepository>,
  ) {
    super(Ruta, dataSource);
    this.destino_aeropuerto = this.createBelongsToAccessorFor('destino_aeropuerto', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('destino_aeropuerto', this.destino_aeropuerto.inclusionResolver);
    this.origen_aeropuerto = this.createBelongsToAccessorFor('origen_aeropuerto', aeropuertoRepositoryGetter,);
    this.registerInclusionResolver('origen_aeropuerto', this.origen_aeropuerto.inclusionResolver);
  }
}

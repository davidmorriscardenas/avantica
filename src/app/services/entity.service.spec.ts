import { TestBed } from '@angular/core/testing';
import { EntityModel } from '../models/entity.model';
import { EntityService } from '../services/entity.service';
import { HttpClientModule } from '@angular/common/http';


describe('EntityService', () => {
    let entityService: EntityService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EntityService],
            imports: [HttpClientModule ]
        });
        entityService = TestBed.get(EntityService);
    });

    it('should retrieve data from the api via GetListEntity', (done) => {
        entityService.getListEntity()
        .subscribe({
            next: (response: any) => {
                let result = entityService.formatData(response);
                expect(result.length).toBeGreaterThan(0);
                done();
            }
        });
    });

    it('should retrieve data from the api via GetEntity', (done) => {
        let id = '0219e692-7afc-4097-9d37-ab1146c373f3'
        entityService.getEntity(id)
        .subscribe({
            next: (response: any) => {
                expect(typeof(response)).toEqual('object');
                done();
            }
        });
    });        

    it('should update data from the api via UpdateEntity', (done) => {
        let entity = new EntityModel();
        entity.id = '0219e692-7afc-4097-9d37-ab1146c373f3';
        entity.name = 'user_email';
        entity.description = 'it is a test for scotiabank - test';
        entity.sensitivity = 'it is a test for scotiabank- test';
        entity.type = 'it is a test for scotiabank - test';
        entityService.updateEntity(entity)
        .subscribe({
            next: (response: any) => {
                expect(typeof(response)).toEqual('object');
                done();
            }
        });
    });            
})

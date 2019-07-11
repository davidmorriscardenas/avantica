import { TestBed } from '@angular/core/testing';
import { RequestService } from '../services/request.service';
import { HttpClientModule } from '@angular/common/http';


describe('RequestService', () => {
    let requestService: RequestService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RequestService],
            imports: [HttpClientModule ]
        });
        requestService = TestBed.get(RequestService);
    });

    it('should retrieve data from the api via GetListRequest - All', (done) => {
        let requestType = 'All';
        requestService.getListRequest(requestType)
        .subscribe({
            next: (response: any) => {
                let result = requestService.formatData(response);
                expect(result.length).toBeGreaterThan(0);
                done();
            }
        });
    });

    it('should retrieve data from the api via GetListRequest - Pending', (done) => {
        let requestType = 'Pending';
        requestService.getListRequest(requestType)
        .subscribe({
            next: (response: any) => {
                let result = requestService.formatData(response);
                expect(result.length).toBeGreaterThan(0);
                done();
            }
        });
    });    

    it('should retrieve data from the api via GetListRequest - Approved', (done) => {
        let requestType = 'Approved';
        requestService.getListRequest(requestType)
        .subscribe({
            next: (response: any) => {
                let result = requestService.formatData(response);
                expect(result.length).toBeGreaterThan(0);
                done();
            }
        });
    });        

    it('should retrieve data from the api via GetListRequest - Denied', (done) => {
        let requestType = 'Denied';
        requestService.getListRequest(requestType)
        .subscribe({
            next: (response: any) => {
                let result = requestService.formatData(response);
                expect(result.length).toBeGreaterThan(0);
                done();
            }
        });
    });    
})

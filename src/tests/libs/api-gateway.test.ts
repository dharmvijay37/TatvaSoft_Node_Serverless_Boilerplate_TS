import { describe, it } from "mocha";
import { expect } from 'chai';
// import chaiAsPromised from 'chai-as-promised';
import { formatJSONResponse } from '../../libs/api-gateway';

describe('apiGateway', () => {
    const sampleDiagnosticNew = {
        updateTimeStamp: new Date().toTimeString(),
        Diagnostic: [],
        Location: { a: 20 },
        TripHBHA: { b: 20 }
      }
    
    describe('formatJSONResponse()', () => {
        it('should return with valid response', () => {
            expect(formatJSONResponse(sampleDiagnosticNew)).to.exist
          })
      

    });
});
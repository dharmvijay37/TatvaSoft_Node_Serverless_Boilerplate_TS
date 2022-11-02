import { describe, it } from "mocha";
import { expect } from 'chai';
// import chaiAsPromised from 'chai-as-promised';
import { successResponse } from '../../libs/api-gateway';

describe('apiGateway', () => {
  const sampleRecords = {
    updateTimeStamp: new Date().toTimeString(),
    Diagnostic: [],
    Location: { a: 20 },
    TripHBHA: { b: 20 }
  }
  
  describe('formatJSONResponse()', () => {

    it('should return with valid response', () => {
      expect(successResponse(sampleRecords)).to.exist
    });

    it('should return with valid response', () => {
      expect(successResponse(sampleRecords)).to.exist
    })
  });
});
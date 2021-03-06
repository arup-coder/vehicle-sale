import {IPSIData} from 'src/app/data-store/models/vehicle.model';
import {JsonObject, JsonProperty} from 'json2typescript';
import {StatusMapper} from '../status-mapper';
import {PsiOptionsMapper} from './psi-options-mapper';

@JsonObject('PsiMapper')
export class PsiMapper implements IPSIData {
    @JsonProperty('expirationDate', String, true)
    public expirationDateInfo: string = undefined;

    @JsonProperty('status', StatusMapper, true)
    public statusData: StatusMapper = undefined;

    @JsonProperty('options', [PsiOptionsMapper], true)
    public optionsData: PsiOptionsMapper[] = undefined;

    private _status: string;
    get status(): string {
      return this._status = this.statusData.name;
    }

    private _statusDate: string;
    get statusDate(): string {
      return this._statusDate = this.statusData.date;
    }
}


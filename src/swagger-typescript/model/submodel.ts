/**
 * BaSyx Asset Administration Shell HTTP REST-API
 * The full description of the generic BaSyx Asset Administration Shell HTTP REST-API
 *
 * OpenAPI spec version: v1
 * Contact: constantin.ziesche@bosch.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AdministrativeInformation } from './administrativeInformation';
import { IConstraint } from './iConstraint';
import { IEmbeddedDataSpecification } from './iEmbeddedDataSpecification';
import { ISubmodelElement } from './iSubmodelElement';
import { Identifier } from './identifier';
import { LangString } from './langString';
import { ModelType } from './modelType';
import { ModelingKind } from './modelingKind';
import { Reference } from './reference';

export interface Submodel { 
    idShort?: string;
    kind?: ModelingKind;
    semanticId?: Reference;
    submodelElements?: Array<ISubmodelElement>;
    modelType?: ModelType;
    embeddedDataSpecifications?: Array<IEmbeddedDataSpecification>;
    qualifiers?: Array<IConstraint>;
    identification?: Identifier;
    administration?: AdministrativeInformation;
    category?: string;
    description?: Array<LangString>;
}
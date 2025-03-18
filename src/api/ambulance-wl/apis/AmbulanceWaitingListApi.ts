/* tslint:disable */
/* eslint-disable */
/**
 * Waiting List Api
 * Ambulance Waiting List management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xsmutny@stuba.sk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  WaitingListEntry,
} from '../models';
import {
    WaitingListEntryFromJSON,
    WaitingListEntryToJSON,
} from '../models';

export interface CreateWaitingListEntryRequest {
    ambulanceId: string;
    waitingListEntry: WaitingListEntry;
}

export interface DeleteWaitingListEntryRequest {
    ambulanceId: string;
    entryId: string;
}

export interface GetWaitingListEntriesRequest {
    ambulanceId: string;
}

export interface GetWaitingListEntryRequest {
    ambulanceId: string;
    entryId: string;
}

export interface UpdateWaitingListEntryRequest {
    ambulanceId: string;
    entryId: string;
    waitingListEntry: WaitingListEntry;
}

/**
 * AmbulanceWaitingListApi - interface
 * 
 * @export
 * @interface AmbulanceWaitingListApiInterface
 */
export interface AmbulanceWaitingListApiInterface {
    /**
     * Use this method to store new entry into the waiting list.
     * @summary Saves new entry into waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {WaitingListEntry} waitingListEntry Waiting list entry to store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    createWaitingListEntryRaw(requestParameters: CreateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WaitingListEntry>>;

    /**
     * Use this method to store new entry into the waiting list.
     * Saves new entry into waiting list
     */
    createWaitingListEntry(requestParameters: CreateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WaitingListEntry>;

    /**
     * Use this method to delete the specific entry from the waiting list.
     * @summary Deletes specific entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    deleteWaitingListEntryRaw(requestParameters: DeleteWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Use this method to delete the specific entry from the waiting list.
     * Deletes specific entry
     */
    deleteWaitingListEntry(requestParameters: DeleteWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * By using ambulanceId you get list of entries in ambulance waiting list
     * @summary Provides the ambulance waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    getWaitingListEntriesRaw(requestParameters: GetWaitingListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WaitingListEntry>>>;

    /**
     * By using ambulanceId you get list of entries in ambulance waiting list
     * Provides the ambulance waiting list
     */
    getWaitingListEntries(requestParameters: GetWaitingListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WaitingListEntry>>;

    /**
     * By using ambulanceId and entryId you can details of particular entry item ambulance.
     * @summary Provides details about waiting list entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    getWaitingListEntryRaw(requestParameters: GetWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WaitingListEntry>>;

    /**
     * By using ambulanceId and entryId you can details of particular entry item ambulance.
     * Provides details about waiting list entry
     */
    getWaitingListEntry(requestParameters: GetWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WaitingListEntry>;

    /**
     * Use this method to update content of the waiting list entry.
     * @summary Updates specific entry
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {string} entryId pass the id of the particular entry in the waiting list
     * @param {WaitingListEntry} waitingListEntry Waiting list entry to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    updateWaitingListEntryRaw(requestParameters: UpdateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WaitingListEntry>>;

    /**
     * Use this method to update content of the waiting list entry.
     * Updates specific entry
     */
    updateWaitingListEntry(requestParameters: UpdateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WaitingListEntry>;

}

/**
 * 
 */
export class AmbulanceWaitingListApi extends runtime.BaseAPI implements AmbulanceWaitingListApiInterface {

    /**
     * Use this method to store new entry into the waiting list.
     * Saves new entry into waiting list
     */
    async createWaitingListEntryRaw(requestParameters: CreateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WaitingListEntry>> {
        if (requestParameters.ambulanceId === null || requestParameters.ambulanceId === undefined) {
            throw new runtime.RequiredError('ambulanceId','Required parameter requestParameters.ambulanceId was null or undefined when calling createWaitingListEntry.');
        }

        if (requestParameters.waitingListEntry === null || requestParameters.waitingListEntry === undefined) {
            throw new runtime.RequiredError('waitingListEntry','Required parameter requestParameters.waitingListEntry was null or undefined when calling createWaitingListEntry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/waiting-list/{ambulanceId}/entries`.replace(`{${"ambulanceId"}}`, encodeURIComponent(String(requestParameters.ambulanceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WaitingListEntryToJSON(requestParameters.waitingListEntry),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WaitingListEntryFromJSON(jsonValue));
    }

    /**
     * Use this method to store new entry into the waiting list.
     * Saves new entry into waiting list
     */
    async createWaitingListEntry(requestParameters: CreateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WaitingListEntry> {
        const response = await this.createWaitingListEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this method to delete the specific entry from the waiting list.
     * Deletes specific entry
     */
    async deleteWaitingListEntryRaw(requestParameters: DeleteWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.ambulanceId === null || requestParameters.ambulanceId === undefined) {
            throw new runtime.RequiredError('ambulanceId','Required parameter requestParameters.ambulanceId was null or undefined when calling deleteWaitingListEntry.');
        }

        if (requestParameters.entryId === null || requestParameters.entryId === undefined) {
            throw new runtime.RequiredError('entryId','Required parameter requestParameters.entryId was null or undefined when calling deleteWaitingListEntry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/waiting-list/{ambulanceId}/entries/{entryId}`.replace(`{${"ambulanceId"}}`, encodeURIComponent(String(requestParameters.ambulanceId))).replace(`{${"entryId"}}`, encodeURIComponent(String(requestParameters.entryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use this method to delete the specific entry from the waiting list.
     * Deletes specific entry
     */
    async deleteWaitingListEntry(requestParameters: DeleteWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWaitingListEntryRaw(requestParameters, initOverrides);
    }

    /**
     * By using ambulanceId you get list of entries in ambulance waiting list
     * Provides the ambulance waiting list
     */
    async getWaitingListEntriesRaw(requestParameters: GetWaitingListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WaitingListEntry>>> {
        if (requestParameters.ambulanceId === null || requestParameters.ambulanceId === undefined) {
            throw new runtime.RequiredError('ambulanceId','Required parameter requestParameters.ambulanceId was null or undefined when calling getWaitingListEntries.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/waiting-list/{ambulanceId}/entries`.replace(`{${"ambulanceId"}}`, encodeURIComponent(String(requestParameters.ambulanceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WaitingListEntryFromJSON));
    }

    /**
     * By using ambulanceId you get list of entries in ambulance waiting list
     * Provides the ambulance waiting list
     */
    async getWaitingListEntries(requestParameters: GetWaitingListEntriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WaitingListEntry>> {
        const response = await this.getWaitingListEntriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * By using ambulanceId and entryId you can details of particular entry item ambulance.
     * Provides details about waiting list entry
     */
    async getWaitingListEntryRaw(requestParameters: GetWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WaitingListEntry>> {
        if (requestParameters.ambulanceId === null || requestParameters.ambulanceId === undefined) {
            throw new runtime.RequiredError('ambulanceId','Required parameter requestParameters.ambulanceId was null or undefined when calling getWaitingListEntry.');
        }

        if (requestParameters.entryId === null || requestParameters.entryId === undefined) {
            throw new runtime.RequiredError('entryId','Required parameter requestParameters.entryId was null or undefined when calling getWaitingListEntry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/waiting-list/{ambulanceId}/entries/{entryId}`.replace(`{${"ambulanceId"}}`, encodeURIComponent(String(requestParameters.ambulanceId))).replace(`{${"entryId"}}`, encodeURIComponent(String(requestParameters.entryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WaitingListEntryFromJSON(jsonValue));
    }

    /**
     * By using ambulanceId and entryId you can details of particular entry item ambulance.
     * Provides details about waiting list entry
     */
    async getWaitingListEntry(requestParameters: GetWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WaitingListEntry> {
        const response = await this.getWaitingListEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this method to update content of the waiting list entry.
     * Updates specific entry
     */
    async updateWaitingListEntryRaw(requestParameters: UpdateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WaitingListEntry>> {
        if (requestParameters.ambulanceId === null || requestParameters.ambulanceId === undefined) {
            throw new runtime.RequiredError('ambulanceId','Required parameter requestParameters.ambulanceId was null or undefined when calling updateWaitingListEntry.');
        }

        if (requestParameters.entryId === null || requestParameters.entryId === undefined) {
            throw new runtime.RequiredError('entryId','Required parameter requestParameters.entryId was null or undefined when calling updateWaitingListEntry.');
        }

        if (requestParameters.waitingListEntry === null || requestParameters.waitingListEntry === undefined) {
            throw new runtime.RequiredError('waitingListEntry','Required parameter requestParameters.waitingListEntry was null or undefined when calling updateWaitingListEntry.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/waiting-list/{ambulanceId}/entries/{entryId}`.replace(`{${"ambulanceId"}}`, encodeURIComponent(String(requestParameters.ambulanceId))).replace(`{${"entryId"}}`, encodeURIComponent(String(requestParameters.entryId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WaitingListEntryToJSON(requestParameters.waitingListEntry),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WaitingListEntryFromJSON(jsonValue));
    }

    /**
     * Use this method to update content of the waiting list entry.
     * Updates specific entry
     */
    async updateWaitingListEntry(requestParameters: UpdateWaitingListEntryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WaitingListEntry> {
        const response = await this.updateWaitingListEntryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

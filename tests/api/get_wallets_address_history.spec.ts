import { test, expect } from '@playwright/test';
import { validateSchemaAjv } from 'playwright-schema-validator';
import * as schema from '../schemas/getWalletsAddressHistorySchema.json';
import { expectedTransactions } from '../data/getWalletsAddressHistoryResponse';

test.describe('Wallets', () => {
    test('User should get wallet address history (/wallets/{address}/history)', async ({ page, request }) => {
        const walletsAddressHistoryRequest = await request.get(process.env.API_BASE_URL + `wallets/${process.env.WALLET_ADDRESS as string}/history`, {
            headers: {
                'X-API-Key': process.env.MORALIS_API_KEY as string,
                'accept': 'application/json',
            },
            params: {
                'chain': 'eth',
                'order': 'DESC',
                'limit': 5
            }
        });

        expect(walletsAddressHistoryRequest.ok()).toBeTruthy();
        
        const responseBody = await walletsAddressHistoryRequest.json();
        expect(responseBody).toHaveProperty('page_size');
        expect(responseBody).toHaveProperty('page');
        expect(responseBody).toHaveProperty('limit');
        expect(responseBody).toHaveProperty('result');
        expect(responseBody).toHaveProperty('cursor');

        expect(responseBody.page_size).toBe(5);
        expect(responseBody.limit).toBe(5);

        const { result } = responseBody;
        expect(result).toEqual(expect.arrayContaining(
            expectedTransactions.map(tx => expect.objectContaining(tx))
        ));

        await validateSchemaAjv(
            { page },
            responseBody,
            schema,
            { endpoint: `wallets/${process.env.WALLET_ADDRESS as string}/history`, method: 'get', status: 200 }
        );
    });
});
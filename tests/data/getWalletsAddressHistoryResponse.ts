import { formatUnits } from "ethers";

const rawExpectedTransactions = [
    {
        hash: '0xf53ef12d0b1604acee0a30b27e025980a3370e51cf087581ae8adc3800f3d0ae',
        from_address: '0xcb1c1fde09f811b294172696404e88e658659905',
        to_address: '0x4fef9d741011476750a243ac70b9789a63dd47df',
        gas_price: '2471369962',
        receipt_gas_used: '71112',
    },
    {
        hash: '0x2672ff7ec16848ea46b2269ea5a138a67215fb62550e41a39e41c1098b2a871b',
        from_address: '0xcb1c1fde09f811b294172696404e88e658659905',
        to_address: '0x0000000000000068f116a894984e2db1123eb395',
        gas_price: '1498415315',
        receipt_gas_used: '194278',
    }
];

/**
 * Calculating the transaction_fee
 */
export const expectedTransactions = rawExpectedTransactions.map(tx => {
    const feeWei = BigInt(tx.gas_price) * BigInt(tx.receipt_gas_used);

    return {
        ...tx,
        transaction_fee: formatUnits(feeWei, 'ether')
    };
});
/**
 * @param type - "evm" or "solana", extend this union as needed (e.g., "sui")
 * @param id - Chain ID, optional for EVM
 */
export type Chain =
    | EvmChain
    | SolanaChain
    | AptosChain
    | ChromiaChain
    | FuelChain
    | SuiChain
    | ZilliqaChain
    | CosmosChain
    | StarknetChain
    | RadixChain
    | ZetrixChain
    | VaraNetworkChain;

export type SuiChain = {
    type: "sui";
};

export type EvmChain = {
    type: "evm";
    id: number;
};

export type SolanaChain = {
    type: "solana";
};

export type AptosChain = {
    type: "aptos";
};

export type ChromiaChain = {
    type: "chromia";
};

export type FuelChain = {
    type: "fuel";
};

export type ZilliqaChain = {
    type: "zilliqa";
    id: number;
    evmId: number;
};

export type CosmosChain = {
    type: "cosmos";
};

export type StarknetChain = {
    type: "starknet";
};

export type RadixChain = {
    type: "radix";
    id: number;
};

export type ZetrixChain = {
    type: "zetrix";
};

export type VaraNetworkChain = {
    type: "substrate";
    id: "vara";
    name: "Vara Network";
    currency: { symbol: "VARA"; decimals: 18 };
    rpcUrl: string;
    explorer?: string;
};

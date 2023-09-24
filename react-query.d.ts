declare module "react-query" {
    export {QueryClientProvider} from "react-query/types"
    export {useMutation} from "react-query/types"
}

declare module "react-query/hydration"{
    export default interface HydrateProps{
        children?: React.ReactNode
    }
    export {Hydrate} from "react-query/hydration"
}
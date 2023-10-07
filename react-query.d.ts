declare module "react-query" {
    export default interface QueryClientProviderProps{
        children?: React.ReactNode
    }
    export interface QueryClientProviderProps {
        children?: React.ReactNode;
    }
    
    export {QueryClientProvider} from "react-query/types"
    export {useMutation} from "react-query/types"
    export {useQuery} from "react-query/types"
    export {useInfiniteQuery} from "react-query/types"
    export {QueryKey} from "react-query/types"
    export {QueryClient} from "react-query/types"
}


declare module "react-query/hydration"{
    export default interface HydrateProps{
        children?: React.ReactNode
    }
    export {Hydrate} from "react-query/hydration"
    export {dehydrate} from "react-query/hydration"
}

import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {

    const payload: ActionsJson = {
        rules: [
            {
                pathPattern: "/projects/**",
                apiPath: "/api/actions/contribute",
            }
        ]
    }

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS
    });
}

export const OPTIONS = GET;


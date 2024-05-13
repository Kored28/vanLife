
export const loginLoader = ({ request }) => {
    return new URL(request.url).searchParams.get("message")
}
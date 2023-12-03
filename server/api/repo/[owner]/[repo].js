export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const { owner, repo } = event.context.params;

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${config.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return response.json();
});

export default defineEventHandler(async (event) => {
    const { character } = await readBody(event);
    const { prompt } = await readBody(event);

    const payload = {
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": character},
            {"role": "user", "content": prompt}
        ],
        temperature: 0.7,
        max_tokens: 300,
        n: 1,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
        },
        method: "POST",
        body: JSON.stringify(payload),
    });

    const json = await response.json();
    return json;
})
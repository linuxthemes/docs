export async function getFileContents(file: string): Promise<string> {
    let response = await fetch(`https://raw.githubusercontent.com/linuxthemes/base/refs/heads/base/${file}`);
    console.log(response.url)
    if (response.status == 404 ) response = await fetch("https://raw.githubusercontent.com/linuxthemes/base/refs/heads/base/CONTRIBUTING.md");
    console.log(response.url)
    return await response.text();
}

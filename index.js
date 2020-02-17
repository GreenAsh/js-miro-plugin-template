miro.onReady( async () => {
    const plugin_name = 'dummy-plugin'
    const clientId = await miro.getClientId()
    
    window.addEventListener("message", async (e) => {
        console.log(`${plugin_name} | ${clientId} | ${JSON.stringify(e.data)}`)
    })
} );

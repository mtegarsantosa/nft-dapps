let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                <p>
                    The New Fork NFTs Website.
                </p>
                </div>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => {}

}

export default Bottombar;
module.exports = function (plop) {
    // controller generator
    plop.setGenerator('nft', {
        description: 'NFT smart contract starter',
        prompts: [{
            type: 'input',
            name: 'nft_name',
            message: 'NFT Name (e.g Bomber Gun)'
        },
        {
            type: 'input',
            name: 'nft_symbol',
            message: 'NFT Symbol (BOMBG)'
        }],
        actions: [{
            type: 'add',
            path: 'contracts/NFT.sol',
            force: true,
            templateFile: 'templates/NFT.hbs'
        },
        {
            type: 'add',
            path: 'migrations/2_nft_migration.js',
            force: true,
            templateFile: 'templates/NFT_Migration.hbs'
        }]
    });
};
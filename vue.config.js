module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
		configureWebpack:{
			externals: {
					// 'marked': 'marked',
			}
		}
}

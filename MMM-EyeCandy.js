/* Magic Mirror
 * Module: MMM-EyeCandy
 *
 * By Mykle1
 * MIT Licensed.
 */
Module.register("MMM-EyeCandy", {
    // Default module config.
    defaults: {
        style: '1', // Choose image if not slideshow
        maxWidth: "100%", // Adjusts size of images. Retains aspect ratio.
        // Overrides style. Local path or internet URL's. This will be a list of urls that can be set
        //in config.js
        updateInterval: 5 * 60 * 1000, // set in config.js -> 0 means no slideshow!
        animationSpeed: 3000,
    },

    start: function () {
        console.log("Starting MMM-EyeCandy");
        self = this;
        this.url = '';
        this.eyesUrls = {
	    '1': 'https://media.giphy.com/media/l9eTgC1GpyEZq/giphy.gif',
	    '2': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0006.gif',
	    '3': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0013.gif',
	    '4': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0004.gif',
	    '5': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0093.gif',
	    '6': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0099.gif',
	    '7': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0162.gif',
	    '8': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0314.gif',
	    '9': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0300.gif',
	    '10': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0143.gif',
	    '11': 'http://www.animatedimages.org/data/media/35/animated-eye-image-0321.gif',
	    '12': 'http://www.picgifs.com/graphics/e/eyes/graphics-eyes-662258.gif',
	    '13': 'http://www.picgifs.com/graphics/e/eyes/graphics-eyes-449207.gif',
	    '14': 'https://media.giphy.com/media/l2SpYymt1W1pkqb5e/giphy.gif',
	    '15': 'https://www.collater.al/wp-content/uploads/2013/11/ma_face_mid.gif',
	    '16': 'https://s-media-cache-ak0.pinimg.com/originals/b4/30/e8/b430e8fbe229dd7b3f3e935c3c9ef730.gif',
	    '17': 'http://s.pikabu.ru/post_img/2013/11/09/11/1384022136_669507211.gif',
	    '18': 'http://68.media.tumblr.com/03a435c5e7ba416ef90be272f5170522/tumblr_mu0kp9XwSn1qc0s10o1_500.gif',
	    '19': 'http://pic.pimg.tw/darthvader/dfdedcfebc895bc48df4db6d765fe8ec.gif',
	    '20': 'https://s-media-cache-ak0.pinimg.com/originals/2b/bd/44/2bbd44dee42db72974d95f86fea8d3ff.gif',
	    '21': 'https://s-media-cache-ak0.pinimg.com/originals/d7/e5/06/d7e5061c2e0c73c60bc643e0fddc97ba.gif',
	    '22': 'https://s-media-cache-ak0.pinimg.com/originals/ff/61/a7/ff61a7034e2d1a4606910ee88f24afac.gif',
	    '23': 'http://68.media.tumblr.com/2b27908fac782ca54cc2b3aff6862423/tumblr_mra3owkIhC1ro855no1_500.gif',
	    '24': 'http://www.geekextreme.com/wp-content/uploads/2013/02/fuzzy-gif.gif',
	    '25': 'http://orig05.deviantart.net/6984/f/2015/019/4/6/120515_480x800_f__by_victhor-d8en0m2.gif',
	    '26': 'http://38.media.tumblr.com/d1665cbde913b2e495ad24c2579df935/tumblr_n5wio1sTz91tummxoo1_250.gif',
	    '27': 'https://cdn.shopify.com/s/files/1/0172/2296/products/six_large.gif?v=1403626913',
	    '28': 'https://s-media-cache-ak0.pinimg.com/originals/73/b2/c1/73b2c1b5cd54e7bb71e6b94a652cb92c.gif',
	    '29': 'http://66.media.tumblr.com/6c0995048767c190b30f6f1509aeb436/tumblr_nruis5lhIn1qzt4vjo1_500.gif',
	    '30': 'http://alexandra.ucoz.org/_ph/26/2/114819057.gif',
	    '31': 'http://img17.dreamies.de/img/120/b/vaoigmruccd.gif',
	    '32': 'http://www.ddesignerr.com/wp-content/uploads/2012/05/026.gif',
	    '33': 'https://s-media-cache-ak0.pinimg.com/originals/6b/d8/ef/6bd8ef35364c9672c7cbb4687977d3ee.gif',
	    '34': 'http://bestanimations.com/Science/Chemistry/electron-singularity-animated-gif.gif',
	    '35': 'http://bestanimations.com/Humans/Skulls/skull-animation-gif-3.gif',
	    '36': 'https://s-media-cache-ak0.pinimg.com/originals/1b/99/a4/1b99a402c520a20f69bde73be778c098.gif',
	    '37': 'http://3.bp.blogspot.com/-gB_29pdcz7g/UXjglip231I/AAAAAAAAD_s/wtojtZXO9AU/s320/pictsel-davidope15.gif',
	    '38': 'http://1.bp.blogspot.com/_5oJhQAjCd9k/TOFe3bRcgqI/AAAAAAAAAMM/pxOJ_hm8Mps/s1600/supreme_1.gif',
	    '39': 'https://media.giphy.com/media/9JLl87j7cHisE/giphy.gif',
	    '40': 'http://68.media.tumblr.com/116333fb96e8686e857b1db8a26fe241/tumblr_myucf1d5VM1spu58bo1_500.gif',
	    '41': 'http://bestanimations.com/Humans/Skulls/skull-animation-gif-2.gif',
	    '42': 'https://static.tumblr.com/fc536f36bf2da8ddb6374ba63a89a479/wslnmk1/EvLo1xgf0/tumblr_static_tumblr_static_filename_640.gif',
	    '43': 'http://orig02.deviantart.net/f176/f/2008/348/f/7/smiley_face_gif_by_sookie_by_sookiesooker.gif',
	    '44': 'http://static.giga.de/wp-content/uploads/2015/05/face-red-loop-15.emoji_-rcm320x0.gif',
	    '45': 'https://media.giphy.com/media/FTbD5RqvttJ5e/giphy.gif',
	    '46': 'https://media.giphy.com/media/aN9GqoR7OD3nq/giphy.gif',
	    '47': 'https://media.giphy.com/media/3e80bmOBgeCZO/giphy.gif',
	    '48': 'https://media.giphy.com/media/4NPT1ipEUoiMo/giphy.gif',
	    '49': 'https://media.giphy.com/media/WuaGC7DUTeJW0/giphy.gif',
	    '50': 'https://media.giphy.com/media/ZSUtKFTbwndYs/giphy.gif',
	    '51': 'https://media.giphy.com/media/s2uampOAMWksU/giphy.gif',
	    '52': 'https://media.giphy.com/media/dbopGHCaI2zsY/giphy.gif',
	    '53': 'https://media.giphy.com/media/ql77HNnLAjV4s/giphy.gif',
	    '54': 'https://media.giphy.com/media/eAMJgzoGAEwCc/giphy.gif',
	    '55': 'https://media.giphy.com/media/vZqiytAaw85Ne/giphy.gif',
	    '56': 'https://media.giphy.com/media/PNf2Ke7gn6oDK/giphy.gif',
	    '57': 'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif',
	    '58': 'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif5opt.gif',
	    '59': 'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalsphere2.gif',
	    '60': 'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossalspiral2opt.gif',
	    '61': 'https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossaltd2opt.gif',
	    '62': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120430.gif',
	    '63': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/120515.gif',
	    '64': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130207.gif',
	    '65': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130304.gif',
	    '66': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130309.gif',
	    '67': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/130407.gif',
	    '68': 'https://www.thisiscolossal.com/wp-content/uploads/2014/03/140104.gif',
	    '69': 'https://www.thisiscolossal.com/wp-content/uploads/2014/06/6.gif',
	    '70': 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Switching_Sides.gif',
	    '71': 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Lava_Burst.gif',
	    '72': 'https://www.thisiscolossal.com/wp-content/uploads/2017/08/Cracked_Gem.gif',
	    '73': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_05.gif',
	    '74': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_02.gif',
	    '75': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_03.gif',
	    '76': 'https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_04.gif',
	    '77': 'https://media.giphy.com/media/VgBk8EZQILIaPIJymY/giphy.gif'
            // You can add your own images here!!!
        }

        // Initialize URL with a random image
        if (this.config.style != '' || this.config.updateInterval > 0) {
		this.url = this.eyesUrls[String(Math.floor(Math.random() * Object.keys(this.eyesUrls).length) + 1)];
	}
	else if (this.config.style != '' || this.config.updateInterval == 0) {
            this.url = this.eyesUrls[this.config.style];
	}

        var self = this;

	if (this.config.updateInterval > 0) {

	        const intervalId = setInterval(function () {
			// Select a random image index
			self.config.currentImg = Math.floor(Math.random() * Object.keys(self.eyesUrls).length);
			self.url = self.eyesUrls[String(self.config.currentImg + 1)];
			console.log("NEW IMAGE SELECTED:" + self.url);
			self.updateDom(self.config.animationSpeed || 0); // Use config.animationSpeed or revert to zero @ninjabreadman
        	}, this.config.updateInterval);
	}
    },

    getStyles: function () {
        return ["MMM-EyeCandy.css"]
    },

    // Override dom generator.
    getDom: function () {
        var wrapper = document.createElement("div");
        var image = document.createElement("img");
        var getTimeStamp = new Date();

        if (this.config.style != '') {
            image.classList.add = "photo";
            image.src = this.url + "?seed=" + getTimeStamp;

            image.style.maxWidth = this.config.maxWidth;
        }

        wrapper.appendChild(image);

        return wrapper;
    },


    /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function (notification, payload) {
        if (notification === 'HIDE_EYECANDY') {
            this.hide();
        } else if (notification === 'SHOW_EYECANDY') {
            this.show(1000);
        }

    },

});

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "af8b6773074480288587cefe0a28fbe9",
".git/config": "305095ae730bb0966444d055f1172d04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81db8c7a4050efe189ba1dbfd7f47cb2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d6365fca443998e8bd0f1439b01c256",
".git/logs/refs/heads/main": "8f594d887da0f57b615a5286b9cead49",
".git/logs/refs/remotes/origin/main": "0a45fe895158145628ed31e511c85b3e",
".git/objects/02/06b55d14368b96e50710951e2393ef0ec5af26": "d2968c23d77daa29f3ae3739daf76059",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/0d/d973ddf864d88cd7cfc4b0a4cd5e84707ddd6d": "d53e3be758c65ab9a7d2a8c3f0a5f41c",
".git/objects/16/63db6beb40b9702e8fe7312bc3774a273c8cb8": "f717788c85789853aba5f7cf784676fb",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/cfedc3bfbeb43e6e00509838f104cb0699b8e7": "f4eb33f6f2d59cec5f5902d50ccffa6b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/bf221ce500d043c01745264ea8f11868a81f37": "838be36b761a01f164796cb0847fcdac",
".git/objects/2b/1221bccd7641e5a25c3089f6db3f5911f562db": "9f6ae93b209324520cbb3c6c1121f60f",
".git/objects/2b/dc0b0cc978a08e57412c2c0d5ba55d9262ddd1": "51e9006166cb9d23dccb753287cfc41a",
".git/objects/2d/d05839570896060ffc4a520ae7489d6d049a0c": "573db28b082675abdc4098a3a9f27482",
".git/objects/34/aad5af5ca87bdf7da9dbd03fd870a0eff4be1c": "8d0366faf0be5ba4eec23d90f39c6bb2",
".git/objects/36/f9a521606d5af8fd56f6c239b9fca036cdf765": "eec8186936fc69613c5916884d894087",
".git/objects/37/b2ca7bdc7ab33471e5821a45d3ef66a8168cdf": "cb29b543cc84b681376df82cfd22729d",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/78ea6d2019a18c3440e7eac653e8d5ceea7a87": "088e51b2c4e8ceedb5938aa91eceb1b5",
".git/objects/3b/812f9f2c68e33e678d6448f8062a24eb12305d": "04f9381fc6cd2b0a11865ee5ffaec65c",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/41/4a56ae3d5d7776518ac78e11216dd2251b3fe2": "5ee741ec7990d1bc85baf57a2c21a3c7",
".git/objects/41/d3d822ec3291ae954eec5de28afea71cd48619": "cbefd0b5ec6ad3647bc8c10a9e918727",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/6f93535e3f60b7aff26d8e00ddf70f9c89ba8b": "90e3297118857e2586270f72b2cfc714",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/daf57431f6d4f0691238bf9e24af1a84ca5a34": "1f7fbae1c31211502802391823716e84",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/d1b03542fb2d469f4d1dc621b39d670b77dbdc": "7ad84a63c5641f567db064efbdc3753e",
".git/objects/5d/0a24874fead7cda32fdd5e563c7bbbb428e270": "33239ab957ae46e4a6b504b7391a699e",
".git/objects/61/46493206644ac81955199c2a1d46fcc8005846": "8665c98b51468372dd2bf210c41648e2",
".git/objects/67/c7ade32cfe7453ec024b20f4211789f3d10504": "9624e95af07729477e90bf71f10627cc",
".git/objects/6a/fb7423c49a12bd0ffc19885bdf04ce4344e1ba": "d455810062ff6d749dead2b751abedcd",
".git/objects/6c/ae2226d09d9b41d074169a19955cbffa104698": "da238886879bbef0b061a99eed9388e3",
".git/objects/75/daab4f1b17eafe710dc20d50d5e576b7330047": "6ba2824029af7f449e02be0a6535055e",
".git/objects/79/75261bd47d0112fab7f5a376e1293e56a55584": "feb014f5ccf06785742c110e165622d3",
".git/objects/81/4c57f902cb5f50172b338fddd32dcff4e7b464": "7db79e31dab538fa025b7a9f73b73556",
".git/objects/86/6fe137a0b9a4cc67351af929e1d0ecefa318e1": "10fa354aebc6b2a4a219590fad93b844",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9c3f327d30ac4e92c2a8f7f127aada9f55297e": "a54f79324cb3839f6da14c631694b733",
".git/objects/9e/1a1d26b32816c842aed76b8c63e2f9e7ca542f": "3bdea0354ed9611c0fa547cc0e8575e5",
".git/objects/a1/c280080e520e6c83e24dd99aefdd9c702ac07c": "2c936feda6798c3a122129cb9218a383",
".git/objects/b1/b41f5317edf3f545e013f35f5f2d662c5d7867": "b72c4b05a67c04a55c7a20c7f14e343f",
".git/objects/b2/d1a0d2c61b93412cdcbbe8e29ff175cbeb08d5": "0d03452ab3438f78bb29ffe7c17dcde6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/efd562d9c54ec46b6890ae34bc35aece6598be": "73c15e88592afe86307a004b16c61b2e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/8d0b4ac1e176d52e3a738fa619b063040d7e27": "9fea1467930ec403b0be85644af024db",
".git/objects/bf/fffca80730a02718153bd1f757340e2cbdbb06": "4762359caa5b3cf50c30c610b42ef386",
".git/objects/c3/057e77adbde25836a231db6d10eb3ff7c04f66": "91d2511ff87a69df622feccf33a93b13",
".git/objects/c5/2bf1cf86c6c32f5a3d417b6dfa8b4aa513ec11": "6995edbe547ad99a43661af24a6fde56",
".git/objects/c7/24ec9797e3ea18a2e842712372292d6097d86f": "ccc4ae02453373a2b9569f03ade256f1",
".git/objects/c8/41e9827e44cc780ccb7e8c0250832680300e96": "ef1f6824a4062166dce5951d1daa31f6",
".git/objects/c8/791bfb0b7436ffd8ae58fe96a638db868f8270": "7e1d3cf8ce8d76d7ffba52e4ab6b52f6",
".git/objects/cf/f9d39d4c2481a0d239104954979715465b7832": "34710dddb7d846fd4f676c9c35ace122",
".git/objects/d0/841f2e61ed3d92232b9cd2c1fbfb4dff4853a1": "a8072233646a8808be7f33fb3c1870ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/da7765a2d0d50ef0aab21953c010cc68c4a1c0": "b8fdc9f239619ab8e0816dfd65ced99e",
".git/objects/d8/8e47d144e3bf1ddffe84d38781ebf1349ad5bd": "85f6ad4454b83b532bc7931f318492c1",
".git/objects/da/e876439b383cce1b38b2c7941ec90cf39f099a": "4aef84dedc3544255d589ee737513048",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/e096a24e59fb9f1e501899389e3905c6c27cd7": "73359fa7932626d48c34734684c71c0f",
".git/objects/e3/0780cffb2ad51dcf3284dd958bafa042455354": "1e3c77929ea91feed91ac9a00c732ee5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/51a63c935d58732d1dc2083ff0c00befafe925": "c670c8722fc83c3dc295e40f3dac1700",
".git/objects/ea/1e270fa1d472b58c6e5615568435cfa74c8bc1": "0a51c510d97924cc766d6defc859ab3b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4a5aaa04df30f84b782abd538c02cb814602c2": "b3f467c06159fa3afb0ed4256f9e3028",
".git/objects/f4/349c37f99d7da81c066a6d0ed82c7d20b2fbc6": "44b98ba26be51b3274b63b4c460570f4",
".git/objects/f7/6ce7243d749c3286493983f0064bbe63613918": "eaf68b286f52ffd32e9a36cdd6fe7a24",
".git/objects/fc/d723136d1b5d0ddcf94c155a0f51b1b5128029": "e2147db7941e7f33ce258777992989c3",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "7adae27333a5a3a37a74b64d2fe685a0",
".git/refs/remotes/origin/main": "7adae27333a5a3a37a74b64d2fe685a0",
"assets/AssetManifest.bin": "82234bb06334b3c71f7a46c9d0f1216a",
"assets/AssetManifest.bin.json": "ae96ae33383bb31c3fc84ebdc357463d",
"assets/AssetManifest.json": "ca0bf57ac0d84f368df66f9a30969647",
"assets/assets/arduino-original-wordmark.svg": "7433abaad24ef516bb60a19873475091",
"assets/assets/c-original.svg": "7984f1f99e00b58e6402c5624e1dc298",
"assets/assets/cplusplus-original.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/dart-plain-wordmark.svg": "3499f32a862c98f6bc661d433f1d1431",
"assets/assets/firebase-original-wordmark.svg": "5f27bb2ea5b26bd158e4c40ffa119bf0",
"assets/assets/flutter-original.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/javascript-original.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/linux-original.svg": "17eb8f433d72c073ec12417f3ca5d157",
"assets/assets/mongodb-plain-wordmark.svg": "84c02b8cd9d494f31d12ac362af4d5c0",
"assets/assets/nodejs-original-wordmark.svg": "23a18bbb1377c88b2fcc15f321e18a66",
"assets/assets/numpy-plain-wordmark.svg": "a75080c8855e9c4ab66d4c8847d98ae0",
"assets/assets/perfil.jpeg": "bae115bd3974f55f2ec411fdc5c90370",
"assets/assets/python-original.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/ros-original-wordmark.svg": "5b424646505810c11e21ff3163be68f3",
"assets/assets/solidworks.svg": "af2543c5c76d796d9cee606170e8a122",
"assets/assets/ubuntu-original-wordmark.svg": "3a51d0b961dd5f56222ada39b5e2bf18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0fc34e8549e5ee9e4e84c14c57c0f120",
"assets/NOTICES": "4b9c2b64575b40b9ce93e74770d10258",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67320a0cbbff4118002454c1d1ff095b",
"/": "67320a0cbbff4118002454c1d1ff095b",
"main.dart.js": "246554987b60c463f97265038ef74fc1",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

(function(w) {

function encrypt(passPhrase, pubkey, expo) {
    var pubkey = typeof pubkey !== 'undefined' ?  pubkey : "b5230b9fdd6c9e1b883fb497e08a648dc3df6ea933ceb54b52609161ded8459d3836ad92cf73aeb0152a5b7463c8df0a75040f66d8c5825875a7f5b784dedec7f1f338978586742531662f91398a030632d3edf5961cd2906a8841eced7c233b398ad1b26a6526029a02c71a34a7d441ebe90f3a5abbfe0618f82b43d638de33";
    var expo = typeof expo !== 'undefined' ?  expo : "010001";

    let pub = new RSAKey();
    
    pub.setPublic(pubkey, expo)
    
    return pub.encrypt(passPhrase);
    
}

w.encrypt = encrypt;

})(window);
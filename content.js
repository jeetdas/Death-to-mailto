const anchorTags = document.body.getElementsByTagName("a");

Array.from(anchorTags).forEach(function (tag) {
    if (tag.href.indexOf("mailto") !== -1) {
        var regex = /\S+[a-z0-9]@[a-z0-9\.]+/img
        var emailAddress = tag.href.split('?')[0].split('&')[0].match(regex)[0];
        emailAddress = emailAddress.replace("mailto:", "");
        tag.href = 'javascript:{navigator.clipboard.writeText(\"' + emailAddress + '\").then(() => { console.log(\'Successsfully destroyed mailto!\'); }).catch(err => { console.log(\'Something went wrong with mailto :(\', err); });}';
    }
});
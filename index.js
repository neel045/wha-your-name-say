$(document).ready(function() {
    $('.btn').click(function() {
        const name = $('#name').val();
        console.log(name);
        $('#displayimg').attr('src', `//joeschmoe.io/api/v1/random/${name}`);
    });
});
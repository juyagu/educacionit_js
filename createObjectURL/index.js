var fileInput = document.querySelector('input[type="file"]');
var preview = document.getElementById('preview');

fileInput.addEventListener('change', function(e) {
    preview.onload = function() {
        var dims = this.naturalWidth + 'x' + this.naturalHeight;
        document.querySelector('.dimensions').innerHTML = 'Dimensions: ' + dims;
      
        window.URL.revokeObjectURL(this.src);
    };
  
  
    var url = URL.createObjectURL(e.target.files[0]);
    preview.setAttribute('src', url);
}, false);
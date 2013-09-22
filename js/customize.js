/**
 *  A javascript used to add css for tables generated from the markdown
 */
function fix_table_style() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; ++i) {
        var div = divs[i];
        if (div.className == "post-content") {
            var tables = div.getElementsByTagName("table");
            for (var j = 0; j < tables.length; ++j) {
                var tb = tables[j];
                tb.className = "table table-bordered";
            }
        }
    }
}

/**
 * Perform the initialization when DOM is ready.
 */
domready(function () {
    fix_table_style();
});

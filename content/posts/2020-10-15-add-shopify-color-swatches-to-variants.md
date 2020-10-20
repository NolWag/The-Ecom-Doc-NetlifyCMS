---
template: SinglePost
title: Add Shopify Color Swatches to Variants
status: Published
date: 2020-10-14
featuredImage: https://ucarecdn.com/42904d8f-5947-4609-9906-35aaf568354a/-/crop/1335x726/0,0/-/preview/
excerpt: Add custom styled color swatches to your Shopify variants.
meta:
  title: Shopify Color Swatches
---
**1 - Create New Snippet**

Name this snippet "swatch.liquid"

Paste the contents of this repo in your "swatch.liquid" file - [Content for swatch file](https://raw.githubusercontent.com/carolineschnapp/color-swatches/master/swatch.liquid)

**2 - Locate product.liquid**

You will find "product.liquid" in your templates folder.

This is where we will insert our "swatch.liquid" file. 

Place this code where you want your new variants to appear.

```
{% if product.available and product.variants.size > 1 %}
{% render 'swatch' for product.options as swatch %}
{% endif %}
```

If you're not sure where to put this code, look for a `<select>` with a `name="id", this is`\
where your current, drop down variants are.

**3 - Locate selectCallback Function**

This can be in your "product.liquid", "theme.liquid" or "theme.js" file.

Once you fine the selectCallback function you will need to add this code to the body of the function.

```
// BEGIN SWATCHES
if (variant) {
  var form = jQuery('#' + selector.domIdPrefix).closest('form');
  for (var i=0,length=variant.options.length; i<length; i++) {
    var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
    if (radioButton.size()) {
      radioButton.get(0).checked = true;
    }
  }
}
// END SWATCHES
```

**4 - Add another chuck of code**

Locate your "theme.liquid" file in your "layouts" folder.

Add this code before the closing `</body>`tag.

```
<script>
jQuery(function() {
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
    var optionValue = jQuery(this).val();
    jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
  });
});
</script>
```

**5 - Add the CSS**

Add this code to your "theme.scss.liquid" or "custom-styles.scss.liquid" - [CSS for variants](https://raw.githubusercontent.com/carolineschnapp/color-swatches/master/swatch.css.liquid)

**6 - Soldout image**

You'll want to add an image named "soldout.jpg" to your "Assets" folder. This will be overlay the variant when sold out.

**7 - Add Color Swatches** 

You only need to do this if you are using color variants.

Add the swatches to your "Assets" folder using hyphenated naming convention "black.jpg" or "blue-gray.jpg".

This is condensed version of this post on the Shopify forum - [Post](https://community.shopify.com/c/Shopify-Design/Product-pages-Add-color-swatches-to-products/m-p/616427)
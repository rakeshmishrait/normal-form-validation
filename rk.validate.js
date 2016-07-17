        //add validation
        jQuery("body").delegate('.field_required', 'keyup , change', function($){
            var isval =jQuery(this).val().trim();
            if(!isval)
            {
               jQuery(this).addClass('has_error');
            }
            else
            {
                jQuery(this).removeClass('has_error');
            }
        });

        jQuery('.submit').click(function(e){
            e.preventDefault();
            var has_error = false;
            var index = 0;
            jQuery('.field_required').each(function(){
              
                if(jQuery(this).is(':visible'))
                {
                    var isval =jQuery(this).val().trim();

                    if(!isval)
                    {
                        has_error = true;
                        jQuery(this).addClass('has_error');
                        if(index == 0)
                        {
                            jQuery(this).focus();
                            index++;
                        }


                    }
                    else
                    {
                        jQuery(this).removeClass('has_error');


                        if(jQuery(this).attr('type') == 'number')
                        {
                            var number_field = jQuery(this).val();
                            if(!jQuery.isNumeric(number_field))
                            {
                                jQuery(this).addClass('has_error');

                            }

                        }

                    }
                }
            });

            if(has_error)
            {
                return false;
            }
            else
            {
                //Add a code to post data

                var frmdata = jQuery("#form_ID").serializeArray();
                frmdata.push({name:'action',value:'form_save_action'});

                jQuery.post(jQuery("#form_ID").attr('action'), frmdata, function(result) {
                   //form sucess full submit
                }, 'json');

            }

        });


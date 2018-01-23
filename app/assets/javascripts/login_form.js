var login_form = new Ext.Window({
    url: '...',
    hidden: true,

    renderTo: document.body,
    frame: true,
    title: 'User Form',
    width: 300,
    height:200,
    layout: 'form',
    url: 'login_form.submit',
    items: [{


        xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        id: 'name',
        
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Email',
        name: 'email',
        id: 'email',
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Login',
        name: 'login',
        id: 'login',
        allowBlank: false

    }], 
    buttons:[{
        xtype: 'tbbutton',
        text: 'Create user',

        listeners: {
            click: function() {
                var a = Ext.getCmp("name").getValue();
                var b = Ext.getCmp("email").getValue();
                var c = Ext.getCmp("login").getValue();


                Ext.Ajax.request({
                    url: '/users',
                    method: 'POST',
                    params: {
                        name: a,
                        email: b,
                        login: c

                    },
                    success: function(response, opts) {
                        alert('success')
                        Ext.getCmp("myGrip").getStore().load();
                        Ext.getCmp("myGrip").getView().refresh();
                        login_form.hide();
                        window.location.reload();

                    },
                    failure: function() {
                        alert('fail');
                    }

                });

            }
        }
    }, {
        xtype: 'tbbutton',
        text: 'Back',
        handler: function() {
            location.href = "/users";
        }

    }],

});
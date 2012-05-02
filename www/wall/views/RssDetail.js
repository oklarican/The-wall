wall.views.RssDetail = Ext.extend(Ext.Panel, {
    id: 'rssDetail',
    layout: 'fit',
    scroll: 'vertical',
    styleHtmlContent: true,
    initComponent: function(){
        Ext.apply(this, {
        dockedItems: [
            {xtype: 'toolbar',
            //id: 'RssDetailToolbar',
            title: 'RSS Detail',
            items: [{
                    xtype: 'button',
                    ui: 'back',
                    text: 'Back',
                    handler: function(){
                    Ext.dispatch({
                                 controller: wall.controllers.main,
                                 action: 'backToRssFeed',
                                 animation: {type: 'slide', direction: 'right'},
                                 });
                    }
                    }]
            }
        ],
        });

        wall.views.RssDetail.superclass.initComponent.apply(this);
    }
});



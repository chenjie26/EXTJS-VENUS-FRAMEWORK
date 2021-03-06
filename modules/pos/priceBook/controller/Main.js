Ext.define('Module.pos.priceBook.controller.Main', {
    extend : 'Ext.app.Controller',
	
	
    stores : ['Module.pos.priceBook.store.PriceBooks'],
    models : ['Module.pos.priceBook.model.PriceBook'],
	
	refs: [{
		ref: 'contentPanel',
		selector: 'contentpanel'
	}, {
		ref: 'priceBookMainView',
		selector: 'priceBookMainView'
	}],

    init: function() {
        var me = this;
		
		me.control({
			'priceBookMainView': {
				afterrender: function(cmp){
					
				},
				added: function(cmp, container, pos, eOpts ){
					
				}
			}
		});
		
    },
	
	
	beforeLaunch: function(appliation){
		
	},
	
	launch: function(application){
		var me = this;
	}
	
});

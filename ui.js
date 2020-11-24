

function activate_tab(tabs, pages, activetab)
{
    for (key in tabs)
    {
        tabs[key].className = (key == activetab) ? "" : "inactive";
    }
    for (key in pages)
    {
        pages[key].className = (key == activetab) ? "tabbody" : "inactive tabbody";
    }
}

function show_settingspane(pane, cancelarea, show)
{
    pane.className = show ? "pane" : "pane inactive";
    cancelarea.style.display = show ? "initial" : "none";
}

function init_ui()
{
    var tabs =
    {
        players:        document.getElementById("playerstab"),
	scenarios:      document.getElementById("scenariotab"),        
        decks:          document.getElementById("deckstab"),
        help:          document.getElementById("helptab")
	
    };
    var pages =
    {
        players:        document.getElementById("playerspage"),
	scenarios:      document.getElementById("scenariospage"),        
        decks:          document.getElementById("deckspage"),
        help:           document.getElementById("helppage")
    };

    settingspane =      document.getElementById("settingspane");
    settingsbtn =       document.getElementById("settingsbtn");
    cancelarea =        document.getElementById("cancelarea");

    scenariotab.onclick = function(e)
    {
	save_party();
	change_suggested_level();
	show_available_scenarios();
        activate_tab(tabs, pages, "scenarios");

    }
	
    helptab.onclick = function(e)
    {
        activate_tab(tabs, pages, "help");
    }
	
    deckstab.onclick = function(e)
    {
        activate_tab(tabs, pages, "decks");
	change_suggested_level();
    }

   playerstab.onclick = function(e)
    {
        activate_tab(tabs, pages, "players");
    }

    settingsbtn.onclick = function(e)
    {
        show_settingspane(settingspane, cancelarea, true);
    }

    cancelarea.onclick = function(e)
    {
        show_settingspane(settingspane, cancelarea, false);
    }

    activate_tab(tabs, pages, "players");
    load_party();	
	
}


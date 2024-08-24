import data from "./data.json"
import React from "react"
import { useState } from "react"
import { createContext } from "react"

export const WidgetContext = createContext({
    categories: [],
    addWidegt: () => { },
    removeWidget: () => { },
    filterWidget: ()=>{}
});

export const WidgetsProvider = ({children}) => {
    const [categories, setCategories] = useState(data);
    
    const addWidegt = (categoryId, widgetData) => {
        setCategories((prevData) => {
            return prevData.map((category) => {
                if (category.id === categoryId) {
                    return {...category, widgets: [...category.widgets, widgetData]}
                }
                else {
                    return category
                }
            })
        })
    }

    const removeWidget = (categoryId, widgetData) => {
        setCategories((prevData) => {
            return prevData.map((category) => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        widgets : category.widgets.filter((widget)=>(widget!==widgetData))
                    }
                }
                else {
                    return category
                }
            })
        })
    }

    const filterWidget = (query) => {
        if (!query) {
            return categories;
        }
        else {
            return categories.map((category) => {
                return {
                    ...category,
                    widgets : category.widgets.filter((widget)=>(widget.toLowerCase().includes(query.toLowerCase())))
                }
            })
        }
    }

    return (
        <WidgetContext.Provider value={{ categories, addWidegt, removeWidget, filterWidget }}>{ children}</WidgetContext.Provider>
    )
}
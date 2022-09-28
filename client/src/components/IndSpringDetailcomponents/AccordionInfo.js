import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "../IndSpringDetailcomponents/accordion.css";



export default function AccordionInfo (props) {
    // console.log(props);
    return(

<div>
    <Accordion allowZeroExpanded={true}  id="accordion" >
            <AccordionItem class="accordion-group">
                <AccordionItemHeading class="accordion-heading">
                    <AccordionItemButton class="accordionbutton">
                        Overnight Facilities
                        </AccordionItemButton>
                    </AccordionItemHeading>
                <AccordionItemPanel class="accordion-inner">
                    <p>
                        {props.currentHotSpringSite.overnightFacilities}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem class="accordion-group">
                <AccordionItemHeading class="accordion-heading">
                    <AccordionItemButton class="accordionbutton">
                        road access
                        </AccordionItemButton>
                    </AccordionItemHeading>
                <AccordionItemPanel class="accordion-inner">
                    <p>
                        {props.currentHotSpringSite.roadAccess}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem class="accordion-group">
                <AccordionItemHeading class="accordion-heading">
                    <AccordionItemButton class="accordionbutton">
                        google link
                        </AccordionItemButton>
                    </AccordionItemHeading>
                <AccordionItemPanel class="accordion-inner">
                    <a href={`${props.currentHotSpringSite.googleLink}`}>
                        Link To Google Maps
                    </a>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem class="accordion-group">
                <AccordionItemHeading class="accordion-heading">
                    <AccordionItemButton class="accordionbutton">
                    Website (If Available)
                        </AccordionItemButton>
                    </AccordionItemHeading>
                <AccordionItemPanel class="accordion-inner">
                    <a href={props.currentHotSpringSite.website != 'N/A' ? `${props.currentHotSpringSite.website}` : null}>
                        {props.currentHotSpringSite.website}
                    </a>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem class="accordion-group">
                <AccordionItemHeading class="accordion-heading">
                    <AccordionItemButton class="accordionbutton">
                    latitude/longitude
                        </AccordionItemButton>
                    </AccordionItemHeading>
                <AccordionItemPanel class="accordion-inner">
                    <p>
                        {`${props.currentHotSpringSite.lat} N, ${props.currentHotSpringSite.long} W`}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>


    )
}
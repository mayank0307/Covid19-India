import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FAQ(props) {

  return (
    <div className="FAQ">
      <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      What is the novel coronavirus?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>This is a new strain of coronavirus that has not been previously identified in humans.
Coronaviruses are a large family of viruses that are known to cause illness in humans and animals. In humans, this large family of viruses are known to cause illness ranging from the common cold to Severe Acute Respiratory Syndrome (SARS).</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      What are the symptoms of novel coronavirus?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>In confirmed cases of illness in humans, common symptoms have been acute, serious respiratory illness with fever, cough, shortness of breath, and breathing difficulties. Based on current clinical experience, the infection generally presents as pneumonia. It has caused kidney failure and death in some cases. It is important to note that the current understanding of the illness caused by this infection is based on a limited number of cases and may change as more information becomes available.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Can it be transmitted from person to person?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>This is not known with certainty at this time. The cases occurring in the same family raises the possibility of limited human-to-human transmission. Alternatively, it is possible that the infected family members were exposed to the same source of infection, for example, in a household or workplace</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      How could I become infected with this virus?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>To date, we do not know how humans have become infected with this virus. Investigations are underway to determine the virus source, types of exposure that lead to infection, mode of transmission and the clinical pattern and course of disease.

</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Is there a vaccine for the novel coronavirus?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>There is no vaccine currently available</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Is there a treatment for the novel coronavirus?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>There is no specific treatment for disease caused by novel coronavirus. However, many of the symptoms caused by this virus can be treated and therefore treatment should be based on the symptoms of the patient. Moreover, supportive care for infected persons can be highly effective.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      What can I do to protect myself?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Exactly how people become infected with this virus is not known at this time. However, some general measures that would be prudent and help prevent the acquisition of any respiratory illness are to avoid close contact, when possible, with anyone who shows symptoms of illness (coughing and sneezing), and to maintain good hand hygiene</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Is it true that this novel coronavirus originated from bats?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>This is one possibility but the origin of the virus has not yet been established.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Can humans become infected with novel coronavirus from animals? If so, which ones should we be concerned about?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>WHO is closely monitoring the situation to identify how people are being exposed. There is currently no direct evidence that the human cases were exposed through direct contact with animals.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Why are you guys putting in time and resources to do this while not gaining a single penny from it?
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Because it affects all of us. Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </div>
  );
}

export default FAQ;

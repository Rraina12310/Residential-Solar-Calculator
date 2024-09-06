import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: 'Arial, sans-serif';
  background-color: #FFFFFF;
  min-height: 100vh;
`;

const Section = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #154734;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
`;

const Title = styled.h2`
  color: #154734;
  margin-bottom: 15px;
`;

const Text = styled.p`
  color: #154734;
  font-size: 16px;
`;

const InfoBox = styled.div`
  background-color: #fff;
  border: 1px solid #154734;
  padding: 8px;
  margin-top: 10px;
  border-radius: 4px;
  width: 95%;
`;

const InfoTitle = styled.h4`
  margin: 0;
  color: #154734;
  font-size: 14px;
`;

const InfoContent = styled.p`
  margin: 5px 0 0;
  font-size: 12px;
  color: #be4300;
`;

const OutputPage = () => {
    const location = useLocation();
    const { PVWResult_JSON } = location.state || {};

    const ac_annual = PVWResult_JSON?.ac_annual || '';
    const capacity_factor = PVWResult_JSON?.capacity_factor || '';
    const num_batteries = PVWResult_JSON?.num_batteries || '';
    const num_panels = PVWResult_JSON?.num_panels || '';
    const pv_system = PVWResult_JSON?.pv_system || '';
    const pv_cost = PVWResult_JSON?.pv_cost || '';
    const solrad_annual = PVWResult_JSON?.solrad_annual || '';

  return (
    <PageContainer>
      <Section>
        <Title>Solar Sizing Summary</Title>
        <Text>
          This section will display the calculated size of the solar panel system required
          based on the annual energy usage input. It may include details like total kW needed and estimated
          costs.
        </Text>
        <InfoBox>
            <InfoTitle>
                AC Annual
            </InfoTitle>
            <InfoContent>{ ac_annual } kWh</InfoContent>
        </InfoBox>
        <InfoBox>
            <InfoTitle>
                Capacity Factor
            </InfoTitle>
            <InfoContent>{ capacity_factor }</InfoContent>
        </InfoBox>
        <InfoBox>
            <InfoTitle>
                Number of Panels Required
            </InfoTitle>
            <InfoContent>{ num_panels } panels</InfoContent>
        </InfoBox>
        <InfoBox>
            <InfoTitle>
                Daily Energy Output (kW)
            </InfoTitle>
            <InfoContent>{ pv_system } kW</InfoContent>
        </InfoBox>
        <InfoBox>
            <InfoTitle>
                Solar Radiation Annually
            </InfoTitle>
            <InfoContent>{ solrad_annual } kWh / m^2 / day </InfoContent>
        </InfoBox>
      </Section>
      <Section>
        <Title>Battery Sizing</Title>
        <Text>
          Here, the required battery size to support the solar system will be shown. This
          could include battery capacity in kWh and number of batteries recommended.
        </Text>
        <InfoBox>
          <InfoTitle>Battery Capacity</InfoTitle>
          <InfoContent>{ capacity_factor } kWh</InfoContent>
        </InfoBox>
        <InfoBox>
          <InfoTitle>Number of Batteries</InfoTitle>
          <InfoContent>{ num_batteries } batteries</InfoContent>
        </InfoBox>
      </Section>
      <Section>
        <Title>Total Cost</Title>
        <Text>
          Here, the optimal battery and solar panel sizes are taken into account to calculate the total cost of the system.
        </Text>
        <InfoBox>
          <InfoTitle>Total Cost</InfoTitle>
          <InfoContent>${ pv_cost }</InfoContent>
        </InfoBox>
        </Section>
    </PageContainer>
  );
};

export default OutputPage;
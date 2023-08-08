import { Button, Heading, Image, Text, View } from 'native-base';

import localizationImg from '../../../assets/localization.png';
import AppStatusBar from '../../components/status-bar/status-bar.component';
import { useGeolocation } from '../../hooks/use-geolocation';
import useLocale from '../../hooks/use-locale';
import theme from '../../theme';

const GetLocation = () => {
  const { location, getUserLocation } = useGeolocation();

  const { t } = useLocale();

  return (
    <View flex="1" padding={8}>
      <AppStatusBar />
      <View width={260}>
        <Heading fontSize={35}>
          {`${t('SHARE_LOCATION.GREETINGS')} User, ${t('SHARE_LOCATION.ASK_LOCATION')}`}
          <Heading fontSize={35} color={theme.colors.primary[600]}>
            {' '}
            {`${t('SHARE_LOCATION.LOCATION')}`}
          </Heading>
        </Heading>
      </View>
      <Image
        flex="1"
        source={localizationImg}
        resizeMode="contain"
        height={300}
        alt={t('SHARE_LOCATION.IMAGE_ALT_TEXT')}
      />
      {location?.length ? (
        <>
          <View alignItems="center">
            <Text color={theme.colors.gray[400]}>{t('SHARE_LOCATION.WHERE_USER_ARE_MSG')}</Text>
            <Text my={2} fontSize={20} fontWeight="extrabold">
              {location[0].region} - {location[0].subregion}
            </Text>
          </View>
          <Button borderRadius={2} onPress={null}>
            <Text color={theme.colors.white}>{`${t('SHARE_LOCATION.CONFIRM_BUTTON')}`}</Text>
          </Button>
          <Button borderRadius={2} variant="ghost" onPress={getUserLocation}>
            <Text color={theme.colors.gray[500]}>{`${t(
              'SHARE_LOCATION.GET_LOCATION_NEW_ATTEMPT'
            )}`}</Text>
          </Button>
        </>
      ) : (
        <Button borderRadius={2} onPress={getUserLocation}>
          <Text color={theme.colors.white}>{`${t('SHARE_LOCATION.GET_LOCATION')}`}</Text>
        </Button>
      )}
    </View>
  );
};

export default GetLocation;
